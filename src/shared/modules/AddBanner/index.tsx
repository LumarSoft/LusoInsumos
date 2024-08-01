import { AddBanner } from "./components/AddBanner";

export default function AddBannerModule() {
    return (
        <main className="py-2 lg:py-10">
            <h4 className="text-2xl lg:text-4xl text-center font-semibold mb-20">
                Cargar banners manualmente
            </h4>
            <AddBanner />
        </main>
    )
}