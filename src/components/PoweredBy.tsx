export const PoweredBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://neefter.com?utm_source=embed", "_blank");
      }}
      className="spacing-1 absolute bottom-4 right-4 flex cursor-pointer items-center"
    >
      <img
              src="src/NeefterSVG6.svg"
              width={100}
              className=""
            />
    </div>
  );
};
