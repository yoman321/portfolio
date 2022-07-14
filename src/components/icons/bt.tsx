interface Props {
  color?: string;
  className?: string;
}

const BTIcon = ({ className, color = "#000000" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.5 16 16"
    shapeRendering="crispEdges"
    className={className}
  >
    <path
      stroke={color}
      d="M1 1h6M1 2h1M6 2h1M1 3h1M6 3h1M1 4h1M6 4h1M8 4h7M1 5h1M6 5h1M11 5h1M1 6h8M11 6h1M1 7h1M8 7h1M11 7h1M1 8h1M8 8h1M11 8h1M1 9h1M8 9h1M11 9h1M1 10h1M8 10h1M11 10h1M1 11h1M8 11h1M11 11h1M1 12h8M11 12h1M11 13h1"
    />
  </svg>
);

export default BTIcon;
