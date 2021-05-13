import React from "react"

import { Section, Button, Form } from "./style"
import { P, Heading, Input } from "../../ui"
import { Container } from "../../../styles"

const Newsletter = () => (
  <Section>
    <Container id="mc_embed_signup">
      <Heading size="m" style={{ textAlign: "center" }}>
        Rejoignez notre newsletter
      </Heading>
      <Form
        action="https://screenside.us15.list-manage.com/subscribe/post?u=b1740add2400b144d13b18106&amp;id=2f7a5bd41b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
      >
        <div style={{ display: "none" }} aria-hidden="true">
          <input
            type="text"
            name="b_b1740add2400b144d13b18106_2f7a5bd41b"
            tabIndex="-1"
          />
        </div>
        <Input
          type="email"
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          placeholder="Votre email préféré 💜"
        />
        <Button
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        >
          S'inscrire
        </Button>
        <div id="mce-responses" className="clear">
          <P id="mce-error-response" style={{ display: "none" }} />
          <P id="mce-success-response" style={{ display: "none" }} />
        </div>
      </Form>
    </Container>
  </Section>
)

export default Newsletter
