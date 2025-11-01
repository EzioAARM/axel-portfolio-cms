import type { Schema, Struct } from '@strapi/strapi';

export interface SharedInstitution extends Struct.ComponentSchema {
  collectionName: 'components_shared_institutions';
  info: {
    displayName: 'Institution';
    icon: 'book';
  };
  attributes: {
    carousel: Schema.Attribute.Media<'images', true>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    skills: Schema.Attribute.Component<'shared.skill', true> &
      Schema.Attribute.Required;
    timeframe: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJob extends Struct.ComponentSchema {
  collectionName: 'components_shared_jobs';
  info: {
    displayName: 'Job';
    icon: 'briefcase';
  };
  attributes: {
    carousel: Schema.Attribute.Media<'images' | 'files', true>;
    company: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    timeframe: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLanguage extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'Language';
    icon: 'globe';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    level: Schema.Attribute.Enumeration<
      ['Beginner', 'Intermediate', 'Advanced', 'Native/Fluent']
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
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
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'X', 'LinkedIn']>;
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
    group: Schema.Attribute.Enumeration<['Technical', 'Soft', 'Other']> &
      Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    level: Schema.Attribute.Enumeration<
      ['beginner', 'intermediate', 'advanced', 'expert']
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    description: 'Red social o enlace externo';
    displayName: 'Social Link';
  };
  attributes: {
    cssClass: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    platform: Schema.Attribute.Enumeration<
      [
        'Github',
        'LinkedIn',
        'Facebook',
        'Pinterest',
        'WhatsApp',
        'Telegram',
        'Reddit',
        'Email',
        'Instagram',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    useIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
