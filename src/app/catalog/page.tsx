export default function DashboardPage() {
	return (
		<div className="items-center justify-center flex flex-col h-screen p-8">
			<h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h1>
			<p className="text-gray-600 text-lg mb-8">You have successfully logged in.</p>

			<button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
				Go to Product Catalog
			</button>
		</div>
	);
}
