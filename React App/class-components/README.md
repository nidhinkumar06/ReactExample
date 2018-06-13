Class Components

Components should start in Capitialized word since it should be differentiated with html tags
Eg:
1.div in html
2.Div our custom component

Inside our component we should have only one parent component

We can create components in 2 ways
1.class components
2.Functional Compoeenent

When we are using functional component that is

const ComponentName = () => {
  return ()  
}

1.It is created only once as well as we need to set the props in the functional component  
2.render is not used in functional component

Whereas is class component we won't use the props because by default it is used


Diff between class component and ES6 Functional Components

-------------------------------------------------------------------------------
|No |  Class Component                |          ES6-Functional Componenet    |
|==========================================================================   |
|1  |  We need to import component    |     We don't want to import component |
|2  |  Render method is needed        |     Render method is not needed       |
|3  |  props is automatically         |     props should be passed as argument|
|   |    available                    |     No need to use this.props         |
|4  |  State can be defined           |     State can't be defined            |
-------------------------------------------------------------------------------
