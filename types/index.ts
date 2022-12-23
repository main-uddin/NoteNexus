export type Note = {
  id: string;
  title: string;
  note: string;
  label: string;
  priority: "High" | "Medium" | "Low";
  createdAt: number;
  color: string;
  tags: string;
  pinned: boolean;
  archive: boolean;
  trash: boolean;
};
