"use client";

import { useEffect, useState } from "react";
import { Edit2, Plus, Trash2 } from "lucide-react";
import { certificatesAPI } from "../../_lib/api";

const blank = {
  title: "",
  platform: "Udemy",
  certificateUrl: "",
  completionDate: "",
  topics: "",
};

export default function CertificateManager() {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");
  const load = () =>
    certificatesAPI
      .getAll()
      .then((res) => setCertificates(res.data.certificates || []))
      .catch(() => setError("Unable to load certificates."));
  useEffect(() => {
    load();
  }, []);
  const save = async (event) => {
    event.preventDefault();
    setError("");
    const payload = {
      ...form,
      topics: form.topics
        ? form.topics
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean)
        : [],
    };
    try {
      form._id
        ? await certificatesAPI.update(form._id, payload)
        : await certificatesAPI.create(payload);
      setForm(null);
      load();
    } catch (err) {
      setError(err.message || "Unable to save certificate.");
    }
  };
  const remove = async (id) => {
    if (window.confirm("Delete this certificate?"))
      try {
        await certificatesAPI.delete(id);
        setCertificates((items) => items.filter((item) => item._id !== id));
      } catch (err) {
        setError(err.message || "Unable to delete certificate.");
      }
  };
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Certificates</h2>
        <button
          onClick={() => setForm(blank)}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground"
        >
          <Plus size={18} /> Add certificate
        </button>
      </div>
      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}
      {form && (
        <form
          onSubmit={save}
          className="mb-8 grid gap-4 rounded-lg border border-border bg-card p-6 md:grid-cols-2"
        >
          {[
            ["title", "Title", "text"],
            ["platform", "Platform", "text"],
            ["certificateUrl", "Certificate URL", "url"],
            ["completionDate", "Completion date", "date"],
            ["topics", "Topics (comma separated)", "text"],
          ].map(([name, label, type]) => (
            <label
              key={name}
              className={
                name === "title" ||
                name === "certificateUrl" ||
                name === "topics"
                  ? "md:col-span-2"
                  : ""
              }
            >
              <span className="mb-2 block text-sm font-medium">
                {label}
                {name === "completionDate" || name === "topics"
                  ? " (optional)"
                  : " *"}
              </span>
              <input
                required={!["completionDate", "topics"].includes(name)}
                type={type}
                value={form[name] || ""}
                onChange={(event) =>
                  setForm({ ...form, [name]: event.target.value })
                }
                className="w-full rounded-lg border border-border bg-background px-4 py-2"
              />
            </label>
          ))}
          <div className="flex gap-3 md:col-span-2">
            <button className="rounded-lg bg-accent px-5 py-2 font-semibold text-accent-foreground">
              Save certificate
            </button>
            <button
              type="button"
              onClick={() => setForm(null)}
              className="rounded-lg border border-border px-5 py-2"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      <div className="grid gap-3">
        {certificates.map((certificate) => (
          <article
            key={certificate._id}
            className="flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-4"
          >
            <div>
              <h3 className="font-semibold">{certificate.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {certificate.platform}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                aria-label={`Edit ${certificate.title}`}
                onClick={() =>
                  setForm({
                    ...certificate,
                    completionDate:
                      certificate.completionDate?.slice(0, 10) || "",
                    topics: certificate.topics?.join(", ") || "",
                  })
                }
                className="p-2 text-accent"
              >
                <Edit2 size={16} />
              </button>
              <button
                aria-label={`Delete ${certificate.title}`}
                onClick={() => remove(certificate._id)}
                className="p-2 text-destructive"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
