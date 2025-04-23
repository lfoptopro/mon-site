import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Phone } from "lucide-react";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Cabinet d'Ophtalmologie</h1>
          <nav className="space-x-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#team" className="hover:underline">Équipe</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a
  href="https://www.doctolib.fr/ophtalmologue/vitre/vasileios-kolokoutsas"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="text-white border-white">
    Prendre rendez-vous
  </Button>
</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">Votre vision, notre priorité</h2>
          <p className="text-lg text-gray-700 mb-6">Découvrez des soins oculaires personnalisés dans un environnement moderne et rassurant.</p>
          <a
  href="https://www.doctolib.fr/ophtalmologue/vitre/vasileios-kolokoutsas"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md">
    Prendre rendez-vous
  </Button>
</a>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">Nos Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="text-center">
                  <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">Notre Équipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-10">Contactez-nous</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Adresse</h4>
              <p className="text-gray-600 flex items-center justify-center">
                <MapPin className="mr-2" /> 6 boulevard de Chateaubriand, 35500 Vitré
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Téléphone</h4>
              <p className="text-gray-600 flex items-center justify-center">
                <Phone className="mr-2" /> 02 99 96 11 47
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p className="text-sm">© 2025 Cabinet d'Ophtalmologie. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

const services = [
  {
    icon: <Calendar />,
    title: "Consultation Ophtalmologique",
    description: "Des bilans complets pour évaluer votre vision et votre santé oculaire."
  },
  {
    icon: <MapPin />,
    title: "Dépistage des Maladies",
    description: "Glaucome, cataracte et autres pathologies prises en charge."
  },
  {
    icon: <Phone />,
    title: "Bilan Lunettes et Lentilles",
    description: "Prescriptions précises pour une vision optimale."
  }
];

const team = [
  {
    photo: "https://via.placeholder.com/100",
    name: "Dr. Vasileos KOLOKOUSTAS",
    role: "Ophtalmologue"
  },
  {
    photo: "https://via.placeholder.com/100",
    name: "Laurent Foucourt",
    role: "Optométriste"
  },
  {
    photo: "https://via.placeholder.com/100",
    name: "Alison Thouin",
    role: "Secétaire médicale"
  }
];

export default App;