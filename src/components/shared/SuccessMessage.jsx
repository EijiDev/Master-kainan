function SuccessMessage({
  title,
  message,
  email,
  onAction,
  actionLabel = "Back to Menu",
}) {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-100">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="mb-2 text-xl font-bold text-slate-900">{title}</h2>
        <p className="mb-2 text-sm text-slate-600">{message}</p>
        {email && (
          <p className="text-xs text-slate-500">
            Sent to <span className="font-medium">{email}</span>
          </p>
        )}
        <button
          onClick={onAction}
          className="mt-6 px-6 py-2 font-medium text-white bg-slate-700 rounded-lg hover:bg-slate-800"
        >
          {actionLabel}
        </button>
      </div>
    </section>
  );
}

export default SuccessMessage;
