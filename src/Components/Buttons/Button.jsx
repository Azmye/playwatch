const Button = ({ className, children, variant, onClick, shadow, title }) => {
  const variants = {
    primaryButton: 'rounded-3xl bg-gradient-to-r from-slate-400 via-slate-700 to-slate-800 text-white font-bold',
    secondaryButton: 'rounded-3xl border lg:border-4 border-white/80 text-white/80 font-bold',
  };

  const shadows = {
    largeShadow: 'shadow-lg shadow-slate-700 rounded-3xl ',
  };

  const pickedShadow = shadows[shadow];
  const pickedVariant = variants[variant];
  return (
    <button onClick={onClick} className={`${className} ${pickedVariant}`} title={title}>
      {children}
    </button>
  );
};

export default Button;
