import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_authors';
  info: {
    description: 'Informaci\u00F3n del autor de posts o proyectos';
    displayName: 'Author';
    icon: 'user';
  };
  attributes: {
    Avatar: Schema.Attribute.Media;
    Bio: Schema.Attribute.Text;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCarousel extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousels';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    Alt: Schema.Attribute.String & Schema.Attribute.Required;
    Caption: Schema.Attribute.String;
    Url: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedInstitution extends Struct.ComponentSchema {
  collectionName: 'components_shared_institutions';
  info: {
    displayName: 'Institution';
    icon: 'book';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    SEO: Schema.Attribute.Component<'shared.seo', true>;
    Skills: Schema.Attribute.Component<'shared.skill', true> &
      Schema.Attribute.Required;
    Timeframe: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJob extends Struct.ComponentSchema {
  collectionName: 'components_shared_jobs';
  info: {
    displayName: 'Job';
    icon: 'briefcase';
  };
  attributes: {
    Achievements: Schema.Attribute.Text & Schema.Attribute.Required;
    Company: Schema.Attribute.String & Schema.Attribute.Required;
    Images: Schema.Attribute.Component<'shared.carousel', true>;
    Role: Schema.Attribute.String & Schema.Attribute.Required;
    Timeframe: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLanguage extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'Language';
    icon: 'globe';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'Meta Social';
    icon: 'share-square';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search-plus';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    keywords: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    description: 'Habilidad o tecnolog\u00EDa destacada';
    displayName: 'Skill';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Level: Schema.Attribute.Enumeration<
      ['beginner', 'intermediate', 'advanced', 'expert']
    >;
    Name: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Red social o enlace externo';
    displayName: 'Social Link';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    Platform: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.author': SharedAuthor;
      'shared.carousel': SharedCarousel;
      'shared.institution': SharedInstitution;
      'shared.job': SharedJob;
      'shared.language': SharedLanguage;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.skill': SharedSkill;
      'shared.social-link': SharedSocialLink;
    }
  }
}
