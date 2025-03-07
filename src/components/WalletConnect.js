import { useReown } from "@reown/appkit";

const WalletConnect = () => {
  const { connect, disconnect, account } = useReown();

  return (
    <button
      onClick={account ? disconnect : connect}
      className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg"
    >
      {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
    </button>
  );
};

export default WalletConnect;
