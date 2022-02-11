@extends('app')
<script>
    var usersTable = {!! json_encode($usersTable) !!}
</script>
@section('content')
    <div id="users"></div>
@endsection