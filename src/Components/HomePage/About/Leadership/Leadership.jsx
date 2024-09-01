export const Leadership = ({ leader }) => {
  return (
    <section className="p-20 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="text-[18px] max-w-[650px] space-y-4 order-1 md:order-2">
          <h2 className="text-4xl text-green-600 font-bold">Leadership</h2>
          <div className="w-full rounded-lg overflow-hidden md:hidden">
            <img
              src={leader?.photo}
              alt={leader?.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="font-extrabold text-[20px]">{leader?.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: leader?.biography }} />
        </div>
        <div className="w-full rounded-lg overflow-hidden order-2 md:order-1 hidden md:block">
          <img
            src={leader?.photo}
            alt={leader?.name}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
