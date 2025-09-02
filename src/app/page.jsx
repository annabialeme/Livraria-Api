"use client";

import { useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

export default function Page() {
    redirect("/home");
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarLivros = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://openlibrary.org/search.json?title=terror");
            setLivros(response.data.docs);
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-red-600 text-center mb-8 drop-shadow-lg">
                    Livros de Terror
                </h1>
                <div className="text-center mb-8">
                    <button
                        onClick={buscarLivros}
                        disabled={loading}
                        className="bg-red-900 text-gray-100 px-8 py-4 rounded-xl shadow-lg hover:bg-red-700 transition-all duration-200 font-semibold text-lg border border-red-800"
                    >
                        {loading ? "Carregando..." : "Buscar Livros"}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {livros.map((livro, idx) => (
                        <div key={livro.key || idx} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-900 transition-all duration-200 border border-red-900">
                            <h2 className="text-2xl font-bold text-red-500 mb-2 drop-shadow">{livro.title}</h2>
                            <p className="text-base text-gray-300 font-medium mb-1">
                                <span className="font-semibold text-red-400">Autor:</span> {livro.author_name ? livro.author_name.join(", ") : "Desconhecido"}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="font-semibold text-red-500">Ano:</span> {livro.first_publish_year || "N/A"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}