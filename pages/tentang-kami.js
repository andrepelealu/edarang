import TentangKami from "../components/TentangKami";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Edarang CRM Platform | Tentang Kami' />
      <Layout>
        <TentangKami />
      </Layout>
    </>
  );
}
