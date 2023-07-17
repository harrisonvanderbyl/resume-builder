export const InfoCard = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        marginBottom: "10px",
        marginLeft: "10px",
        boxShadow: "0px 0px 5px #ccc",
        backgroundColor: "#eee",
      }}
      className={className}
    >
      {children}
    </div>
  );
};
