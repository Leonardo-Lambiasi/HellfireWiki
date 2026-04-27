interface PageHeaderProps {
  titulo: string;
  descricao: string;
  breadcrumb?: string;
}

const PageHeader = ({ titulo, descricao, breadcrumb }: PageHeaderProps) => (
  <div className="border-b-2 border-hellfire-ash pb-6">
    {breadcrumb && (
      <p className="text-sm text-muted-foreground mb-2 tracking-wide">{breadcrumb}</p>
    )}
    <h2 className="text-5xl font-bold text-hellfire-gold mb-2">{titulo}</h2>
    <p className="text-lg text-muted-foreground">{descricao}</p>
  </div>
);

export default PageHeader;
