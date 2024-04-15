import { signOut } from 'next-auth/react';

interface SignOutButtonProps {
  onClick: () => void; 
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ onClick }) => {
  const handleSignOut = async () => {
    try {
      await signOut();
      onClick();
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
