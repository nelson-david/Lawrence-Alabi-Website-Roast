import { IconProps } from "@/app/types";

const XIcon = ({ color, size }: IconProps) => {
    return (
        <>
            <svg
                width={size ? size.width - 10 : "12"}
                height={size ? size.height - 10 : "12"}
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_11_11)">
                    <path
                        d="M14.8784 10.8184L24.1852 0H21.9798L13.8987 9.39348L7.44433 0H0L9.76025 14.2046L0 25.5494H2.20554L10.7394 15.6295L17.5557 25.5494H25L14.8779 10.8184H14.8784ZM11.8576 14.3297L10.8687 12.9153L3.00023 1.6603H6.38781L12.7378 10.7434L13.7267 12.1579L21.9808 23.9646H18.5933L11.8576 14.3303V14.3297Z"
                        fill={color ? color : "#ffffff"}
                    />
                </g>
                <defs>
                    <clipPath>
                        <rect
                            width="20"
                            height="20.5625"
                            fill={color ? color : "#ffffff"}
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default XIcon;
