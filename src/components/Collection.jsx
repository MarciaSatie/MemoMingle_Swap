import Carousel from './Carousel';

export default function Collection({ collections }) {
  return (
    <div className="space-y-12 p-6 max-w-4xl mx-auto">
      {collections.map(({ collection, icon, cards }) => (
        <section key={collection}>
          <div className="flex items-center space-x-4 mb-4">
            <img src={icon} className="w-10 h-10" alt="" />
            <h2 className="text-2xl font-bold">{collection}</h2>
          </div>
          <Carousel cards={cards} />
        </section>
      ))}
    </div>
  );
}
