export function Card({
  title,
  children,
  id,
  className,
  direction = "column",
  containerHeight,
  columns = 1,
}: {
  title: string;
  children: any;
  className?: string;
  id: string;
  direction?: "row" | "column";
  containerHeight?: string;
  columns?: number;
}) {
  return (
    <span
      className={"w3-container w3-center " + className}
      id={id}
      style={{
        marginBottom: "64px",
        padding: "20px",
      }}
    >
      <h2 className="w3-text-grey">{title}</h2>
      <hr className="w3-opacity" />
      <div
        style={{
          // flexDirection: direction,
          display: "flex",

          // flexWrap: "wrap",
        }}
      >
        {Array.from(Array(columns).keys()).map((i) => (
          <span
            style={{
              width: `calc(100% / ${columns})`,
              display: "flex",
              flexDirection: direction,
              flexWrap: "wrap",
            }}
          >
            {children.filter((_: any, j: number) => j % columns === i)}
          </span>
        ))}
      </div>
    </span>
  );
}
