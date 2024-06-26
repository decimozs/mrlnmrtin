export type TNavProps = {
  title: string;
  href: string;
};

export type TProjectProps = {
  id: number;
  title: string;
  href: string;
  type: "Academic" | "Personal" | "Comission";
  tech: string;
  description: string;
};

export type TArchiveProps = {
  title: string;
  href: string;
  year: number;
};
