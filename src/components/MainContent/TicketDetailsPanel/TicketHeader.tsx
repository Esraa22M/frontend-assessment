export default function TicketHeader({header="نواجه مشكلة في عدم عمل واجهة المستخدم"}) {
  return (
    <h1 className="text-[18px] leading-[150%] font-medium text-[#181C34] text-right font-rubik">
        {header}
    </h1>
  );
}
