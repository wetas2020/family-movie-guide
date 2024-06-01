import Header from '@/components/Header';
import MovieSearch from '@/components/MovieSearch';

export default function Home() {
    return (
        <div>
            <Header />
            <main className="p-4">
                <MovieSearch />
            </main>
        </div>
    );
}
