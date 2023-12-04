type Props = React.ComponentPropsWithRef<"svg"> & {
  size?: number;
  ariaHidden?: boolean;
  [key: string]: any;
};

export default function FavoriteFillIcon({
  size = 24,
  ariaHidden = true,
  ...props
}: Props) {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      {...props}
    >
      <path
        d="m480-170.925-36.153-32.691q-98.461-88.231-162.5-150.577-64.038-62.346-100.576-109.923-36.539-47.577-50.654-86.269-14.116-38.692-14.116-78.615 0-80.153 55.423-135.576Q226.847-819.999 307-819.999q49.385 0 95 23.501 45.615 23.5 78 67.269 32.385-43.769 78-67.269 45.615-23.501 95-23.501 80.153 0 135.576 55.423Q843.999-709.153 843.999-629q0 39.923-13.616 77.615-13.615 37.692-50.154 84.769-36.538 47.077-100.884 110.423-64.346 63.346-165.192 154.577L480-170.925Z"
        fill="currentColor"
      />
    </svg>
  );
}
