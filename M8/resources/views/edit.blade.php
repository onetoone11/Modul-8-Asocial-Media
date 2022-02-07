@extends('app')

@section('content')
<script>
    let post = {!! json_encode($data) !!}
</script>
    <div id="edit"></div>
@endsection