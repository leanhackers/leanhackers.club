import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Networking',
    Svg: require('@site/static/img/networking.svg').default,
    description: (
      <>
        Crie contatos chave com outras pessoas que {` `}
        <strong>realmente</strong> estão contruindo algo.
      </>
    ),
  },
  {
    title: 'Mentoria',
    Svg: require('@site/static/img/menthor.svg').default,
    description: (
      <>
        1 checkpoint por mês com a rede para falar sobre algum tópico de
        interesse.
      </>
    ),
  },
  {
    title: 'Lean&build in public',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
        Lugar perfeito para compartilhar o que você está fazendo e receber
        feedbacks.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
