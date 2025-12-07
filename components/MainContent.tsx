import OrderedSection from '@/components/OrderedSection';

export default function MainContent() {
  return (
    <main>
      <section>
        <h2>Lorem 1</h2>
        <p>
          Contributing a stylesheet to Style Stage means you agree to abide by
          our full guidelines.
        </p>
        <h3>Lorem 1.1</h3>
        <a className="classic-btn-link" href="#">
          Review full guidelines
        </a>
      </section>
      <OrderedSection />
    </main>
  );
}
