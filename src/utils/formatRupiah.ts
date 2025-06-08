const formatRupiah = (v: number) => {
    return v.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

export default formatRupiah;
