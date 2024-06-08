interface QRProps {
  className?: string
}

const QR: React.FC<QRProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.25 1.6875C0.25 1.27329 0.585786 0.9375 1 0.9375H4.375C4.78921 0.9375 5.125 1.27329 5.125 1.6875C5.125 2.10171 4.78921 2.4375 4.375 2.4375H1.75V5.0625C1.75 5.47671 1.41421 5.8125 1 5.8125C0.585786 5.8125 0.25 5.47671 0.25 5.0625V1.6875Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 15.1208C1.41421 15.1208 1.75 15.4566 1.75 15.8708V18.4958H4.375C4.78921 18.4958 5.125 18.8316 5.125 19.2458C5.125 19.6601 4.78921 19.9958 4.375 19.9958H1C0.585786 19.9958 0.25 19.6601 0.25 19.2458V15.8708C0.25 15.4566 0.585786 15.1208 1 15.1208Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.25 5.6875C10.25 5.27329 10.5858 4.9375 11 4.9375H14C14.4142 4.9375 14.75 5.27329 14.75 5.6875V8.6875C14.75 9.10171 14.4142 9.4375 14 9.4375H11C10.5858 9.4375 10.25 9.10171 10.25 8.6875V5.6875ZM11.75 6.4375V7.9375H13.25V6.4375H11.75Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 5.6875C4.25 5.27329 4.58579 4.9375 5 4.9375H8C8.41421 4.9375 8.75 5.27329 8.75 5.6875V8.6875C8.75 9.10171 8.41421 9.4375 8 9.4375H5C4.58579 9.4375 4.25 9.10171 4.25 8.6875V5.6875ZM5.75 6.4375V7.9375H7.25V6.4375H5.75Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 11.6875C4.25 11.2733 4.58579 10.9375 5 10.9375H8C8.41421 10.9375 8.75 11.2733 8.75 11.6875V14.6875C8.75 15.1017 8.41421 15.4375 8 15.4375H5C4.58579 15.4375 4.25 15.1017 4.25 14.6875V11.6875ZM5.75 12.4375V13.9375H7.25V12.4375H5.75Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5403 11.9727C10.5403 11.5584 10.8761 11.2227 11.2903 11.2227H11.6418C12.0561 11.2227 12.3918 11.5584 12.3918 11.9727C12.3918 12.3869 12.0561 12.7227 11.6418 12.7227H11.2903C10.8761 12.7227 10.5403 12.3869 10.5403 11.9727ZM14.7121 11.2227C15.1263 11.2227 15.4621 11.5584 15.4621 11.9727V15.3266C15.4621 15.7409 15.1263 16.0766 14.7121 16.0766H11.3581C10.9439 16.0766 10.6081 15.7409 10.6081 15.3266C10.6081 14.9124 10.9439 14.5766 11.3581 14.5766H13.9621V11.9727C13.9621 11.5584 14.2979 11.2227 14.7121 11.2227Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 15.1208C19.4142 15.1208 19.75 15.4566 19.75 15.8708V19.2458C19.75 19.6601 19.4142 19.9958 19 19.9958H15.625C15.2108 19.9958 14.875 19.6601 14.875 19.2458C14.875 18.8316 15.2108 18.4958 15.625 18.4958H18.25V15.8708C18.25 15.4566 18.5858 15.1208 19 15.1208Z"
      fill="currentColor"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.875 1.6875C14.875 1.27329 15.2108 0.9375 15.625 0.9375H19C19.4142 0.9375 19.75 1.27329 19.75 1.6875V5.0625C19.75 5.47671 19.4142 5.8125 19 5.8125C18.5858 5.8125 18.25 5.47671 18.25 5.0625V2.4375H15.625C15.2108 2.4375 14.875 2.10171 14.875 1.6875Z"
      fill="currentColor"
    ></path>
  </svg>
)

export default QR
