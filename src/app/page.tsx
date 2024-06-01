import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="p-4">
                <SearchBar />
            </main>
        </div>
    );
}
