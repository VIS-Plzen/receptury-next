type Props = React.ComponentPropsWithRef<"svg"> & {
  size?: number;
  ariaHidden?: boolean;
  [key: string]: any;
};

export default function CalendarViewMontsIcon({
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
        d="M180.309-212.001q-26.308 0-45.308-19t-19-45.308v-407.382q0-26.308 19-45.308t45.308-19h599.382q27.008 0 45.658 19 18.65 19 18.65 45.308v407.382q0 26.308-18.65 45.308t-45.658 19H180.309ZM168-505.999h173.463V-696H180.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v177.692Zm225.461 0h173.078V-696H393.461v190.001Zm225.076 0H792v-177.692q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H618.537v190.001ZM341.463-264v-190.001H168v177.692q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h161.154Zm51.998 0h173.078v-190.001H393.461V-264Zm225.076 0h161.154q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-177.692H618.537V-264Z"
        fill="currentColor"
      />
    </svg>
  );
}
