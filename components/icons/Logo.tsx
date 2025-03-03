import { twJoin } from "tailwind-merge";
import { Svg } from "./Svg";

export const Logo = (props: { pink?: boolean }) => (
  <Svg width={14} height={14} className="inline" viewBox="8 8 16 16">
    <g
      clipPath="url(#clip0_0_1)"
      className={twJoin(
        props.pink ? "text-[#8195FF]" : "text-[#243647]",
        "!text-[#DEF1FF]",
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 12C17.1791 12 17 11.8209 17 11.6C17 10.7163 17.7163 10 18.6 10H19C20.1046 10 21 10.8954 21 12V14.191C21 14.5627 20.6088 14.8044 20.2764 14.6382L20.1056 14.5528C19.428 14.214 19 13.5215 19 12.7639V12H17.4ZM17.6 20C17.8209 20 18 19.8209 18 19.6C18 18.7163 17.2837 18 16.4 18H16C14.3431 18 13 16.6569 13 15V12.4C13 12.1791 12.8209 12 12.6 12C11.7163 12 11 12.7163 11 13.6V15C11 17.7614 13.2386 20 16 20H17.6Z"
        fill="currentColor"
      />
      <path
        d="M13 21.5C13 21.7761 12.7761 22 12.5 22H12C11.4477 22 11 21.5523 11 21V19.809C11 19.4373 11.3912 19.1956 11.7236 19.3618L11.8944 19.4472C12.572 19.786 13 20.4785 13 21.2361V21.5Z"
        fill={props.pink ? "#FF81FE" : "#58B9FF"}
      />
      <path
        d="M19.6667 22C19.2985 22 19 21.7015 19 21.3333V19C19 17.3431 17.6569 16 16 16H15.3333C14.597 16 14 15.403 14 14.6667C14 14.2985 14.2985 14 14.6667 14H16C18.7614 14 21 16.2386 21 19V20.6667C21 21.403 20.403 22 19.6667 22Z"
        fill={props.pink ? "#FF81FE" : "#58B9FF"}
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </Svg>
);
