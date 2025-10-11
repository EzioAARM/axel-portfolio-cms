import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors';
  info: {
    description: 'Informaci\u00F3n del autor de posts o proyectos';
    displayName: 'Author';
  };
  attributes: {
    avatar: Schema.Attribute.Media;
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCarousel extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.String;
    url: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Metadatos para SEO y redes sociales';
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    description: 'Habilidad o tecnolog\u00EDa destacada';
    displayName: 'Skill';
  };
  attributes: {
    icon: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<
      ['beginner', 'intermediate', 'advanced', 'expert']
    >;
    name: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Red social o enlace externo';
    displayName: 'Social Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.author': SharedAuthor;
      'shared.carousel': SharedCarousel;
      'shared.seo': SharedSeo;
      'shared.skill': SharedSkill;
      'shared.social-link': SharedSocialLink;
    }
  }
}
