interface PageHeaderProps {
  titulo: string;
  descricao: string;
  breadcrumb?: string;
}

const PageHeader = ({ titulo, descricao, breadcrumb }: PageHeaderProps) => (
  <div className="cabecalho-pagina">
    {breadcrumb && (
      <p className="cabecalho-pagina-trilha">{breadcrumb}</p>
    )}
    <h2 className="cabecalho-pagina-titulo">{titulo}</h2>
    <p className="cabecalho-pagina-descricao">{descricao}</p>
  </div>
);

export default PageHeader;
