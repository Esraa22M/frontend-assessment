export default function Header({ title = "الطلبات" }) {
  return (
      <h2 className="text-base font-semibold leading-[24px] text-left">
        {title}
      </h2>
  );
}
