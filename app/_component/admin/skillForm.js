"use client";

import { useState } from "react";

const categories = {
  frontend: { title: "Frontend", icon: "frontend", color: "bg-primary", order: 1 },
  backend: { title: "Backend", icon: "backend", color: "bg-tertiary", order: 2 },
  "database-cloud": { title: "Database & Cloud", icon: "database", color: "bg-tertiary", order: 3 },
  "design-tools": { title: "Design & Tools", icon: "tools", color: "bg-accent", order: 4 },
};

export default function SkillForm({ onSubmit, onCancel, editingSkill }) {
  const [form, setForm] = useState({ name: editingSkill?.name || "", icon: editingSkill?.icon || "code", categoryKey: editingSkill?.category?.key || "frontend", order: editingSkill?.order ?? 0, isFeatured: editingSkill?.isFeatured || false });
  const change = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  };
  const submit = (event) => {
    event.preventDefault();
    const category = categories[form.categoryKey];
    onSubmit({ name: form.name, icon: form.icon, category: { key: form.categoryKey, ...category }, order: Number(form.order) || 0, isFeatured: form.isFeatured, proficiency: 1, yearsOfExperience: 0 });
  };
  return (
    <form onSubmit={submit} className="space-y-5 rounded-lg border border-border bg-card p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium">Name *<input required name="name" value={form.name} onChange={change} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2" /></label>
        <label className="text-sm font-medium">Category *<select name="categoryKey" value={form.categoryKey} onChange={change} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2">{Object.entries(categories).map(([key, category]) => <option key={key} value={key}>{category.title}</option>)}</select></label>
        <label className="text-sm font-medium">Icon key *<input required name="icon" value={form.icon} onChange={change} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2" /></label>
        <label className="text-sm font-medium">Display order<input min="0" type="number" name="order" value={form.order} onChange={change} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2" /></label>
      </div>
      <label className="flex items-center gap-3 text-sm"><input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={change} /> Feature in the skills introduction</label>
      <p className="text-xs text-muted-foreground">Skills are displayed publicly by category and display order. The public portfolio does not show proficiency or years of experience.</p>
      <div className="flex gap-3 border-t border-border pt-4"><button className="rounded-lg bg-accent px-5 py-2 font-semibold text-accent-foreground">{editingSkill ? "Update skill" : "Create skill"}</button><button type="button" onClick={onCancel} className="rounded-lg border border-border px-5 py-2">Cancel</button></div>
    </form>
  );
}
