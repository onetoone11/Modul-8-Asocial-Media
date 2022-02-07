@extends('app')


@section('content')
<script>
    let posts = {!! json_encode($posts) !!};
</script>
<div id="index"></div>
@endsection