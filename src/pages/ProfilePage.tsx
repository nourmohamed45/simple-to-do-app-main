

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");

  console.log(user);
  return (
    <div className="max-w-2xl mx-auto py-6 blur-md invert  md:filter-none  mt-6">
      <h1 className="text-2xl font-bold mb-4 ml-4 md:ml-0">Profile</h1>
      <div className="dark:bg-black p-6 rounded-lg dark:shadow-white/50 shadow-black/20 shadow-sm">
        <div className="flex items-center mb-4">
          <img
            src="../../public/avatar-svgrepo-com.svg"
            alt="profile"
            className="rounded-full w-16 h-16 border-2 border-gray-300"
          />
          <div className="ml-4">
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {user?.user_metadata?.username}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{user?.email}</p>
          </div>
        </div>
        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
          Your Information:
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong className="text-gray-800 dark:text-gray-200">Name:</strong>{" "}
          <span className="text-gray-700 dark:text-gray-300">
            {user.user_metadata.username}
          </span>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
          <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
