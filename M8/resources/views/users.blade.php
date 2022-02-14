@extends('app')
<script>
    var usersTable = {!! json_encode($usersTable) !!}

    let posts = {!! json_encode($posts) !!}
</script>
@section('content')
    <div id="users"></div>
@endsection