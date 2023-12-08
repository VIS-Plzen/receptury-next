// Source: https://fonts.google.com/icons
// weight: 300

type Props = React.ComponentPropsWithRef<"svg"> & {
  size?: number;
  ariaHidden?: boolean;
  [key: string]: any;
};

export default function IconComponent({
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
        d="M264-384q0 54.462 27.385 101.539 27.385 47.078 73.925 76.001-4.462-8.462-6.885-17.886-2.424-9.423-2.424-18.654 0-22.769 8.654-42.807 8.654-20.038 22.577-35.961L480-427.921l93.153 106.153q13.923 16.923 22.384 36.961 8.462 20.038 8.462 41.807 0 9.231-2.424 19.154-2.423 9.924-6.885 18.386 46.54-25.923 73.925-74.001Q696-327.538 696-384q0-51-17.5-100.5T628-576q-17 11-35.5 17t-40.5 6q-52.385 0-91.885-32-39.5-32-49.115-83.769-36 32.615-63 67.115-27 34.5-46 70.885-19 36.384-28.5 73.384T264-384Zm216 36-53 60q-9 11-14 22.5t-5 25.5q0 30 21 51t51 21q30 0 51-21t21-51q0-14-5-26t-14-22l-53-60Zm-20.001-432.228V-697q0 38.462 26.769 65.232 26.77 26.769 65.232 26.769 17.385 0 33.039-6.423t27.577-17.884l15.615-15.769q53.23 36.461 86.499 109.461Q747.999-462.615 747.999-384q0 111.538-78.231 189.768-78.23 78.231-189.768 78.231t-189.768-78.231Q212.001-272.462 212.001-384q0-98.922 65.038-204.575 65.038-105.654 182.96-191.653Z"
        fill="currentColor"
      />
    </svg>
  );
}
