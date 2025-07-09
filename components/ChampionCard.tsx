{/* Username */}
<div className="absolute top-[95px] w-full text-center text-xl font-extrabold text-white tracking-widest">
  {username.toUpperCase()}
</div>

{/* Table Content (shifted slightly higher) */}
<div className="absolute bottom-[165px] left-[55px] right-[55px] text-white text-[14px] font-semibold leading-[2.2rem]">
  {entries.map(({ label, key }) => {
    const row = data[key as keyof typeof data];
    return (
      <div className="flex justify-between px-4" key={key}>
        <span>{label}</span>
        <span>:</span>
        <span>
          {row.rank !== null && row.rank !== undefined
            ? `#${row.rank}`
            : "-"}
        </span>
        <span>
          {row.rank !== null && row.rank !== undefined
            ? row.title
            : "-"}
        </span>
      </div>
    );
  })}
</div>
