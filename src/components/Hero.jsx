export default function Hero() {
    return (
        <section
            className="bg-[url('https://images.unsplash.com/photo-1684853693031-ab9e3f8c9d5e?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat relative h-[350px] md:h-[400px] lg:h-[600px] flex items-center justify-start text-white"
        >
            <div className="container mx-auto max-w-7xl px-2 mt-8 py-8">
                <h1 className="text-l md:text-xl lg:text-3xl font-semibold tracking-wide">The future funds market value</h1>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 tracking-widest"><span className="border-b-4 border-gray-100 py-2">200</span> <span>000</span> <span>000</span> <span>000</span> <span className="text-xl font-bold tracking-tight">NGN</span></h3>
                <p className="text-sm md:text-l lg:text-lg md:text-xl tracking-wide">Empowering our financial landscape<br/>Investing financial wealth for future generations</p>
            </div>
        </section>
    );
}
