import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  console.log(data);
  return (
    <div>
      <h1> Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          //client-side navigation in browser
          //No new html page request needed
          <Link
            legacyBehavior
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <a>
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

//explicity tell Next.js how many pages to create at build time
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //console.log(context); //-> *out1*
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return { props: { data: data, pageName: id } };
}

// *out1*
//context:
//{
//  params: { cat: 'london' },
//  locales: undefined,
//  locale: undefined,
//  defaultLocale: undefined
//}
