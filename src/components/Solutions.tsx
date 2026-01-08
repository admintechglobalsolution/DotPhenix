import { Card, Container, Text } from "./ui";

function Solutions() {
  return (
    <section className="solutions-section">
      <Text as="h2" className="solutions-title">
        Do More With Us
      </Text>
      <Container>
        <div className="solutions-layout">
          {/* LEFT SOLUTIONS */}
          <div className="solutions-list">
            <Card className="solution-item">Coding & Technology Platforms</Card>
            <Card className="solution-item">Business & Legal Solutions</Card>
            <Card className="solution-item">Finance & Financial Services</Card>
            <Card className="solution-item">Healthcare & Medical Systems</Card>
          </div>

          {/* TITLE */}
          <div className="solutions-center">
            <Text as="h2" className="solutions-title">
              🐦‍🔥 DotPhenix Solutions
            </Text>
          </div>

          {/* RIGHT SOLUTIONS */}
          <div className="solutions-list">
            <Card className="solution-item">Insurance Platforms</Card>
            <Card className="solution-item">Retail & E-commerce Solutions</Card>
            <Card className="solution-item">
              Manufacturing & Industrial Systems
            </Card>
            <Card className="solution-item">
              Technical Education & Research
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
