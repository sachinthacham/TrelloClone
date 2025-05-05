type Children = {
  children: React.ReactNode;
};
const MarketingLayout = ({ children }: Children) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Navbar */}
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* Footer */}
    </div>
  );
};
export default MarketingLayout;
