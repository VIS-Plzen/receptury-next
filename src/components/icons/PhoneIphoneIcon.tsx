type Props = React.ComponentPropsWithRef<"svg"> & {
  size?: number;
  ariaHidden?: boolean;
  [key: string]: any;
};

export default function PhoneIphoneIcon({
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
        d="M276.309-68.001q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658v-695.382q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h407.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v695.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H276.309ZM264-273.231v140.922q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h407.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-140.922H264Zm215.789 108q12.903 0 22.249-9.136 9.346-9.136 9.346-22.038 0-12.903-9.135-22.249Q493.113-228 480.211-228q-12.903 0-22.249 9.136-9.346 9.135-9.346 22.038 0 12.902 9.135 22.248 9.136 9.347 22.038 9.347ZM264-325.23h432v-404.771H264v404.771Zm0-456.769h432v-45.692q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H276.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v45.692Zm0 508.768V-120v-153.231Zm0-508.768V-840v58.001Z"
        fill="currentColor"
      />
    </svg>
  );
}
