## Abstractions

For [architecture design][refs-splitting] the methodology suggests operating with [familiar abstractions][refs-adaptability], but in a more consistent and consistent order.

### [`Layers`]

The first level of abstraction is **according to the scope of influence**

- `app` - application initialization *(init, styles, providers, ...)*
- `processes` - application business processes that manage pages *(payment, auth, ...)*
- `pages` - application pages *(user-page, ...)*
- `features` - parts of the application functionality *(auth-by-oauth, ...)*
- `entities` - business entities *(viewer, order, ...)*
- `shared` - reused infrastructure code *(UIKit, libs, API, ...)*

### [`Slices`]

The second level of abstraction is **according to the business domain**

The rules by which the code is divided into slices *depend on the specific project and its business rules* and are not determined by the methodology

### [`Segments`]

The third level of abstraction is **according to the purpose in the implementation**

- `ui` - UI-representation of the module *(components, widgets, canvas, ...)*
- `model` - business logic of the module *(store, effects/actions, hooks/contracts, ...)*
- `lib` - auxiliary libraries
- `api` - the logic of interaction with the API
- `config` - the configuration module of the application and its environment

> **Note:** In most cases, [it is recommended][ext-disc-api] to place `api` and `config` only in the shared layer
## Structure

```sh
└── src/
    ├── app/                    # Layer: Application
    |                           #
    ├── processes/              # Layer: Processes (optional)
    |   ├── {some-process}/     #     Slice: (e.g. CartPayment process)
    |   |   ├── lib/            #         Segment: Infrastructure-logic (helpers/utils)
    |   |   └── model/          #         Segment: Business Logic
    |   ...                     #
    |                           #
    ├── pages/                  # Layer: Pages
    |   ├── {some-page}/        #     Slice: (e.g. ProfilePage page)
    |   |   ├── lib/            #         Segment: Infrastructure-logic (helpers/utils)
    |   |   ├── model/          #         Segment: Business Logic
    |   |   └── ui/             #         Segment: UI logic
    |   ...                     #
    |                           #
    ├── widgets/                # Layer: Widgets
    |   ├── {some-widget}/      #     Slice: (e.g. Header widget)
    |   |   ├── lib/            #         Segment: Infrastructure-logic (helpers/utils)
    |   |   ├── model/          #         Segment: Business Logic
    |   |   └── ui/             #         Segment: UI logic
    ├── features/               # Layer: Features
    |   ├── {some-feature}/     #     Slice: (e.g. AuthByPhone feature)
    |   |   ├── lib/            #         Segment: Infrastructure-logic (helpers/utils)
    |   |   ├── model/          #         Segment: Business Logic
    |   |   └── ui/             #         Segment: UI logic
    |   ...                     #
    |                           #
    ├── entities/               # Layer: Business entities
    |   ├── {some-entity}/      #     Slice: (e.g. entity User)
    |   |   ├── lib/            #         Segment: Infrastructure-logic (helpers/utils)
    |   |   ├── model/          #         Segment: Business Logic
    |   |   └── ui/             #         Segment: UI logic
    |   ...                     #
    |                           #
    ├── shared/                 # Layer: Reused resources
    |   ├── api/                #         Segment: Logic of API requests
    |   ├── config/             #         Segment: Application configuration
    |   ├── lib/                #         Segment: Infrastructure-application logic
    |   └── ui/                 #         Segment: UIKit of the application
    |   ...                     #
    |                           #
    └── index.tsx/              #
```

## Further reading
