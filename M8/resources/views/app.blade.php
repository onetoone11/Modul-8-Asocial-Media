<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">

    <title>Interventus</title>
</head>
<body>
    @yield('content')
    
    <script>
        let globalData = {!! $globalData->toJson() !!};
    </script>
    
    <script src={{mix('js/app.js')}}></script>
</body>
</html>