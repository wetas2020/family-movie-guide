import Header from '@/components/Header';
import MovieSearch from '@/components/MovieSearch';

export default function Home() {
    return (
        <div>
            <title>Family Movie Guide</title>
            <Header />
            <main className="p-4">
                <MovieSearch />
            </main>
        </div>
    );
}
