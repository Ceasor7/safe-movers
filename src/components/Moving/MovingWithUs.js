export default function MovingWithUs() {
  return (
    <div className="flex flex-col my-8 mx-5 sm:mx-24">
      <h1 className="text-4xl my-9 text-[#570987] font-bold">
        Moving is easy with us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center text-center sm:gap-x-10 gap-y-10">
        <div className="flex flex-col rounded-2xl items-center text-center justify-center shadow-2xl border-2 border-[#570987] p-14 sm:p-36">
          <img src="/moving.webp" alt="Moving with Safe Movers" />
          <p>We Pack</p>
        </div>
        <div className="flex flex-col rounded-2xl items-center text-center justify-center shadow-2xl border-2 p-14 sm:p-36 border-[#570987]">
          <img src="/pack.webp" alt="Moving with Safe Movers" />
          <p>We Move & Unpack</p>
        </div>
        <div className="flex flex-col rounded-2xl items-center text-center justify-center p-14 sm:p-36 shadow-2xl border-2 border-[#570987]">
          <img src="/settle.webp" alt="Moving with Safe Movers" />
          <p>We Unpack</p>
        </div>
      </div>
    </div>
  );
}
